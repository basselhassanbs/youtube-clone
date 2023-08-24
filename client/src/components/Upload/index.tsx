import React, { useState, useEffect } from 'react';
import { useClasses } from './styles';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import app from '../../services/firebase';
import { useActions } from '../../hooks/useActions';
import { VideoInput } from '../../shared/interfaces';
import { useNavigate } from 'react-router-dom';

interface Props {
  setIsOpen: (open: boolean) => void;
}

const Upload = ({ setIsOpen }: Props) => {
  const classes = useClasses();
  const navigate = useNavigate();
  const { createVideo } = useActions();
  const [img, setImg] = useState<File | null>(null);
  const [video, setVideo] = useState<File | null>(null);
  const [imgPerc, setImgPerc] = useState(0);
  const [videoPerc, setVideoPerc] = useState(0);
  const [inputs, setInputs] = useState<VideoInput>({
    title: '',
    description: '',
    tags: [],
    imgUrl: '',
    videoUrl: '',
  });

  const handleUpload = () => {
    createVideo(inputs, navigate, () => {
      setIsOpen(false);
    });
  };

  const uploadFile = (file: File, urlType: string) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        urlType === 'imgUrl' ? setImgPerc(progress) : setVideoPerc(progress);
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            // User canceled the upload
            break;

          // ...

          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          setInputs((inputs) => ({ ...inputs, [urlType]: downloadURL }));
        });
      }
    );
  };

  useEffect(() => {
    if (video) uploadFile(video, 'videoUrl');
  }, [video]);
  useEffect(() => {
    if (img) uploadFile(img, 'imgUrl');
  }, [img]);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.close} onClick={() => setIsOpen(false)}>
          X
        </div>
        <h1 className={classes.title}>Upload a new video</h1>
        <label className={classes.label}>Video:</label>
        {videoPerc > 0 ? (
          `Uploading: ${Math.round(videoPerc)} %`
        ) : (
          <input
            className={classes.input}
            type='file'
            accept='video/*'
            onChange={(e) =>
              setVideo(e.target.files ? e.target.files[0] : null)
            }
          />
        )}

        <input
          className={classes.input}
          placeholder='Title'
          value={inputs.title}
          onChange={(e) =>
            setInputs((inputs) => ({
              ...inputs,
              title: e.target.value,
            }))
          }
        />
        <textarea
          className={classes.input}
          placeholder='Description'
          rows={8}
          value={inputs.description}
          onChange={(e) =>
            setInputs((inputs) => ({
              ...inputs,
              description: e.target.value,
            }))
          }
        />
        <input
          className={classes.input}
          placeholder='Seprate the tags with commas.'
          value={inputs.tags.join(',')}
          onChange={(e) => {
            setInputs((inputs) => ({
              ...inputs,
              tags: e.target.value !== '' ? e.target.value.split(',') : [],
            }));
          }}
        />
        <label className={classes.label}>Image:</label>
        {imgPerc > 0 ? (
          `Uploading: ${Math.round(imgPerc)}%`
        ) : (
          <input
            className={classes.input}
            type='file'
            accept='image/*'
            onChange={(e) => setImg(e.target.files ? e.target.files[0] : null)}
          />
        )}

        <button
          className={classes.btn}
          onClick={handleUpload}
          disabled={
            inputs.title == '' ||
            inputs.description == '' ||
            inputs.tags.length == 0 ||
            inputs.imgUrl == '' ||
            inputs.videoUrl == ''
          }
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default Upload;

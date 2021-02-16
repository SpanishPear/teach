import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const getClassData = (classcode, setTutorial) => {
  const url = `${API_URL}/all-tutorials`;
  axios.get(url).then((res) => {
    res.data.forEach((_, i) => {
      // console.log(res.data[i].Tutorial.classcode);
      if (res.data[i].Tutorial.classcode === classcode) {
        setTutorial(res.data[i].Tutorial);
      }
    });
  });
};

const submitFeedback = (formData) => {
  return new Promise((resolve, reject) => {
    axios
      .post('http://localhost:1337/feedback', {
        ...formData,
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export { API_URL as default, getClassData, submitFeedback };

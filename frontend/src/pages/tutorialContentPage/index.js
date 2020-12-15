import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import API_URL from '../../api';

const TutorialContentPage = () => {
  console.log('yeet');
  const [content, setContent] = useState();

  const { classcode, weeknumber } = useParams();
  console.log(weeknumber);
  useEffect(() => {
    axios
      .get(`${API_URL}/tutorial-content?classcode=${classcode}`)
      .then((res) => setContent(res.data));
  }, []);

  console.log(content);
  return (
    <div>
      <div>test</div>
    </div>
  );
};

export default TutorialContentPage;

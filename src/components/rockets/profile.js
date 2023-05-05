import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/profile.css';
import { RocketsData } from '../../redux/rockets/rocketSlice';

function Profile() {
  const displayData = useSelector((state) => state.Rocket.Rockets);
  const dispatch = useDispatch();
  const joinedMissions = useSelector((state) => state.Mission.joinedMissions);
  // console.log(displayData);
  // const displayData = useSelector((state) => state.Rocket.Rockets);
  // const dispatch = useDispatch();
  // console.log(displayData);
  // useEffect(() => {
  //   dispatch(RocketsData());
  // }, [dispatch]);
  useEffect(() => {
    dispatch(RocketsData());
  }, [dispatch]);
  return (
    <div className="profile">
      <div className="missions">
        <h2>My Missions</h2>
        {joinedMissions.map((mission) => (
          <div key={mission.mission_id} className="mission">
            {mission.mission_name}
          </div>
        ))}
      </div>
      <div className="rockets">
        <h2>My Rockets</h2>
        {displayData.map((rockets) => (
          <div key={rockets.id} className="rockets-display">
            {rockets.reserved && rockets.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;

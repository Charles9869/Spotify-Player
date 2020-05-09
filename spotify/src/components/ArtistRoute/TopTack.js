import React from 'react';
import styled from 'styled-components';
import PlayButton from 'react-play-button';

const TopTack = ({ tracks }) => {
  const [playing, setPlaying] = React.useState(null);

  return (
    <ProfileTrack>
      top tracks
      <div style={{ display: 'flex', marginTop: '20px' }}>
        {tracks.map((track, index) => {
          return (
            <ButtonContainer key={index}>
              <PlayButton
                key={track.id}
                url={track.preview_url}
                active={playing === track.id}
                play={() => setPlaying(track.id)}
                stop={() => setPlaying(null)}
                playIconColor={'#FFFFFF'}
                stopIconColor={'#FFFFFF'}
                idleBackgroundColor={'#2B3033'}
                progressCircleColor={'#3354FF'}
                progressCircleWidth={5}
              />
            </ButtonContainer>
          );
        })}
      </div>
    </ProfileTrack>
  );
};

const ProfileTrack = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 26px;
  text-transform: lowercase;
  color: #ffffff;
  margin-top: 40px;
`;

const ButtonContainer = styled.div`
  margin: 10px;
`;
export default TopTack;

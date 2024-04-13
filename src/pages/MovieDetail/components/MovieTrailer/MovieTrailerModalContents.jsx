import React, { useState } from 'react';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import YouTube from 'react-youtube';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const opts = {
  height: '675',
  width: '1200',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters?hl=ko
    autoplay: 0,
    playsinline: 1,
    controls: 0,
    rel: 0
  },
};

const MovieTrailerModalContents = ({data, lang, buttonText}) => {
  const [koreanTrailerOpen, setKoreanTrailerOpen] = useState(false);
  const [englishTrailerOpen, setEnglishTrailerOpen] = useState(false);

  const handleClickOpen = (type) => {
    switch (type) {
      case 'eng':
        setEnglishTrailerOpen(true);
        break;
      case 'kor':
        setKoreanTrailerOpen(true);
        break;
      default:
        break;
    }
  };

  const handleClose = (type) => {
    switch (type) {
      case 'eng':
        setEnglishTrailerOpen(false);
        break;
      case 'kor':
        setKoreanTrailerOpen(false);
        break;
      default:
        break;
    } 
  };

  return (
    <div className='movieTrailerModalContents'>
      <Button variant="outlined" startIcon={<OndemandVideoIcon />} onClick={() => handleClickOpen(lang)}>{buttonText}</Button>
      <Dialog
        maxWidth="xl"
        open={ lang === 'kor' ? koreanTrailerOpen : englishTrailerOpen}
        onClose={() => handleClose(lang)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {data.name &&
          <DialogTitle
            id="alert-dialog-title"
            sx={{
              padding:0,
              fontFamily:"'Spoqa Han Sans Neo', sans-serif",
              fontSize: "clamp(18px, 10vw, 22px)",
              lineHeight:1.25,
              textAlign: "center",
              textShadow:"0 0 5px rgba(0,0,0,0.6)",
              color:"#fff",
              marginBottom:"2rem",
            }}
          >
            {data.name}
          </DialogTitle>
        }
        <DialogContent
          sx={{
            padding:0
          }}
        >
          <YouTube videoId={data.key} opts={opts} />
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: "center"
          }}
        >
          <Button 
            sx={{
              fontSize:"45px",
              color:"#fff"
            }}
            onClick={() => handleClose(lang)}
          >
            <FontAwesomeIcon icon={faXmark} />
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default MovieTrailerModalContents
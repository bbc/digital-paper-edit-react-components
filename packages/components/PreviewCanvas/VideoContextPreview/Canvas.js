import React, { useRef, useEffect, useState } from 'react';

const Canvas = (props) => {
  const ref = props.ref;


  useEffect(() => {
    if (props.videoContextRef && props.videoContext) {

      loadPlaylist();
    }
  }, [ props.videoContextRef ]);

  return (<canvas ref={ props.videoContextRef } width={ props.width } height={ props.height } />);
};
Canvas.defaultProps = {
  playlist : [],
};

export default Canvas;

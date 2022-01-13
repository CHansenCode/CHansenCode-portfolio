import React from 'react';

export const Icons = ({ type }) => {
  return type === 'github' ? (
    <div>git</div>
  ) : type === 'library' ? (
    <div>lib</div>
  ) : type === 'homepage' ? (
    <div>lib</div>
  ) : type === 'slides' ? (
    <div>lib</div>
  ) : type === 'cow' ? (
    <div>lib</div>
  ) : type === 'server' ? (
    <div>lib</div>
  ) : (
    <div>etc</div>
  );
};

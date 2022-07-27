import React, { useRef } from 'react';
import classNames from 'classnames';

import ImageFrontCard from '@/assets/images/image-front-card.png';
import ImageBackCard from '@/assets/images/image-back-card.png';
import Button from '@/components/Button';
import { EIconColor, EIconName } from '@/components/Icon';

import './Upload.scss';

const Upload = ({ className, cover, value = [], accept, multiple, showBackCard, disabled, onChange }) => {
  const inputFilesRef = useRef(null);
  const isExistedValue = value && value.length > 0;

  const handleClickUpload = () => {
    if (!disabled) inputFilesRef?.current?.click();
  };

  const handleChangeUpload = (event) => {
    const { files } = event.target;
    onChange?.([...files]);

    if (inputFilesRef.current) inputFilesRef.current.value = '';
  };

  return (
    <div className={classNames('Upload', { disabled }, className)}>
      {isExistedValue ? (
        <div className="Upload-preview" onClick={handleClickUpload}>
          {value?.map((item) => (
            <div className="Upload-preview-item">
              <img src={URL.createObjectURL(item)} alt="" />
            </div>
          ))}
        </div>
      ) : (
        <div className="Upload-wrapper" onClick={handleClickUpload}>
          <div className={classNames('Upload-wrapper-image', { cover })}>
            <img src={cover || (showBackCard ? ImageBackCard : ImageFrontCard)} alt="" />
            {!cover && (
              <div className="Upload-wrapper-btn">
                <Button title="Upload Image" iconName={EIconName.Plus} iconColor={EIconColor.WHITE} />
              </div>
            )}
          </div>
        </div>
      )}

      <input
        ref={inputFilesRef}
        className="Upload-input"
        accept={accept}
        type="file"
        multiple={multiple}
        onChange={handleChangeUpload}
      />
    </div>
  );
};

export default Upload;

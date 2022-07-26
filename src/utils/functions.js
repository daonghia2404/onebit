/* eslint-disable no-useless-escape */
import { SyntheticEvent } from 'react';
import { notification } from 'antd';
import { Rule } from 'antd/lib/form';
import moment from 'moment';

import { EFormat, ETypeNotification } from '@/common/enums';
import { regex } from '@/common/constants';

export const removeAccents = (str) => {
  let strConverted = str;
  if (strConverted) {
    strConverted = strConverted.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    strConverted = strConverted.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    strConverted = strConverted.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    strConverted = strConverted.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    strConverted = strConverted.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    strConverted = strConverted.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    strConverted = strConverted.replace(/đ/g, 'd');
    strConverted = strConverted.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
    strConverted = strConverted.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
    strConverted = strConverted.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
    strConverted = strConverted.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
    strConverted = strConverted.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
    strConverted = strConverted.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
    strConverted = strConverted.replace(/Đ/g, 'D');

    strConverted = strConverted.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '');
    strConverted = strConverted.replace(/\u02C6|\u0306|\u031B/g, '');
    // Remove extra spaces
    strConverted = strConverted.replace(/ + /g, ' ');
    strConverted = strConverted.trim();
    // Remove punctuations
    strConverted = strConverted.replace(
      /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
      ' ',
    );
    return strConverted;
  }

  return '';
};

export const showNotification = (type, description) => {
  const options = {
    message: '',
    description,
    className: 'Notification',
  };

  switch (type) {
    case ETypeNotification.SUCCESS:
      notification.success(options);
      break;
    case ETypeNotification.WARNING:
      notification.warning(options);
      break;
    case ETypeNotification.ERROR:
      notification.error(options);
      break;
    case ETypeNotification.INFO:
      notification.info(options);
      break;
    default:
      notification.open(options);
  }
};

export const searchString = (target, searchValue) => {
  const searchKey = searchValue.toLowerCase();
  const searchTarget = target instanceof Array ? target.map((str) => str.toLowerCase()) : target.toLowerCase();
  const searchResult =
    searchTarget instanceof Array
      ? !!searchTarget.filter((str) => removeAccents(str).includes(removeAccents(searchKey))).length
      : removeAccents(searchTarget).includes(removeAccents(searchKey));
  return searchResult;
};

export const getTotalPage = (totalItem, pageSize) => {
  return Math.ceil(totalItem / pageSize);
};

export const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export const validationRules = {
  required: (message) => ({
    required: true,
    message: message || 'This field is required !',
  }),
  minLength: (message, length = 2) => ({
    min: length,
    message: message || `Enter characters at least ${length} !`,
  }),
  maxLength: (message, length = 10) => ({
    max: length,
    message: message || `Enter characters at most ${length} !`,
  }),
  email: (message) => ({
    type: 'email',
    message: message || 'Invalid email',
  }),
  noSpecialKey: (message) => ({
    validator: (rule, value) => {
      if (!value || !regex.onlySpecialKey.test(value)) return Promise.resolve();
      return Promise.reject(message || 'Cannot enter special characters !');
    },
  }),
  onlyAlphabetic: (message) => ({
    validator: (rule, value) => {
      if (!value || regex.alphabetic.test(removeAccents(value))) return Promise.resolve();
      return Promise.reject(message || 'This is a field where only alphabetic characters are entered !');
    },
  }),
  onlyNumeric: (message) => ({
    validator: (rule, value) => {
      if (!value || regex.numeric.test(value)) return Promise.resolve();
      return Promise.reject(message || 'This is a field where only numeric characters are entered !');
    },
  }),
  onlyAlphanumerial: (message) => ({
    validator: (rule, value) => {
      if (!value || regex.alphanumerial.test(removeAccents(value))) return Promise.resolve();
      return Promise.reject(message || 'This is a field where only alphanumeric characters are entered !');
    },
  }),
  domain: (message) => ({
    validator: (rule, value) => {
      if (!value || regex.domain.test(value)) return Promise.resolve();
      return Promise.reject(message || 'Invalid domain !');
    },
  }),
  url: (message) => ({
    validator: (rule, value) => {
      if (!value || regex.url.test(value)) return Promise.resolve();
      return Promise.reject(message || 'Invalid URL !');
    },
  }),
  confirmPassword: (confirmPasswordValue, message) => ({
    validator: (rule, value) => {
      if (!value || value === confirmPasswordValue) return Promise.resolve();
      return Promise.reject(message || 'Confirm password not matched !');
    },
  }),
};

export const formatAbbreviationsName = (value) => {
  const arrayString = value.trim().split(' ');
  const onlyOneWord = arrayString.length === 1;

  if (onlyOneWord) {
    const firstLetter = arrayString[0].trim().charAt(0);
    return `${firstLetter}`.toUpperCase();
  }

  const firstLastWordFirstLetter = arrayString[arrayString.length - 2].trim().charAt(0);
  const secondLastWordFirstLetter = arrayString[arrayString.length - 1].trim().charAt(0);

  return `${firstLastWordFirstLetter}${secondLastWordFirstLetter}`.toUpperCase();
};

export const formatISODateToDateTime = (time, format) => {
  return moment(time).format(format || EFormat.DATE_TIME);
};

export const formatMoneyVND = (config) => {
  const separateMoney = Intl.NumberFormat('vi-VN').format(Number(config.amount));
  const unit = config.uppercaseUnit ? 'Đ' : 'đ';
  return `${separateMoney} ${config.showSuffix ? unit : ''}`;
};

export const copyText = (text) => {
  const el = document.createElement('textarea');
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

export const handleErrorImageUrl = (e) => {
  const { currentTarget } = e;
  currentTarget.onerror = null; // prevents looping
  currentTarget.src = 'YOUR URL IMAGE ERROR';
};

export const getQueryParam = (param) => {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
};

export const urlSafe = (text) => {
  const url = text
    .replace(/[^a-zA-Z0-9- ]/g, '') // remove invalid characters
    .replace(/\s\s+/g, ' ') // trim whitespace
    .replace(/ /g, '-') // replace space with -
    .toLowerCase();
  return url;
};

export const truncateStringByCharaters = (content, maxLength) => {
  const contentLength = content.length;
  return `${content.slice(0, contentLength > maxLength ? maxLength : contentLength)}${
    contentLength > maxLength ? '...' : ''
  }`;
};

export const truncateStringByWords = (content, maxWords) => {
  const contentSplited = content.split(' ');
  if (maxWords >= contentSplited.length) {
    return content;
  }
  const contentSplitedOptimized = contentSplited.filter((_, index) => index < maxWords);
  const contentTruncated = contentSplitedOptimized.join(' ');
  return `${contentTruncated}...`;
};

export const createImageByFileBlob = (file) => {
  const imageBlob = new Blob([file]);
  return URL.createObjectURL(imageBlob);
};

export const parseObjectToFormData = (data) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    if (typeof data[key] === 'undefined') return;
    formData.append(key, data[key]);
  });
  return formData;
};

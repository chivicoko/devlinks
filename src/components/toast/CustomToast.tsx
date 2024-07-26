import React from 'react';
import { toast } from 'react-toastify';
import { CheckCircle, Error, Info, Warning, LinkOutlined, SaveOutlined,  } from '@mui/icons-material';

interface CustomToastProps {
  type: 'success' | 'save' | 'error' | 'info' | 'warning';
  message: string;
}

const CustomToast: React.FC<CustomToastProps> = ({ type, message }) => {
  const getIcon = () => {
    switch (type) {
      case 'success':
        return <LinkOutlined style={{ transform: 'rotate(-35deg)', color: '#4caf50' }} />;
      case 'save':
        return <SaveOutlined style={{ color: '#4caf50' }} />;
      case 'error':
        return <Error style={{ color: '#f44336' }} />;
      case 'info':
        return <Info style={{ color: '#2196f3' }} />;
      case 'warning':
        return <Warning style={{ color: '#ff9800' }} />;
      default:
        return null;
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      {getIcon()}
      <span>{message}</span>
    </div>
  );
};

export const showToast = (type: 'success' | 'save' | 'error' | 'info' | 'warning', message: string) => {
  toast(<CustomToast type={type} message={message} />, {
    position: "bottom-center",
    style: {
      color: "#fff",
      background: "#333333",
      borderRadius: "8px",
      fontSize: "16px",
    },
  });
};

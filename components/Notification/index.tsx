import { notification } from 'antd';

const CommonNotification = (type: string, description: string) =>
  notification[type]({
    message: 'Уведомление',
    description,
    duration: 2,
  });

export default CommonNotification;

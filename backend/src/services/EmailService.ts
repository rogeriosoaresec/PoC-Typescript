interface IMailService {
    sendMail(request: IMessageDTO) : void;
}

interface IMailTo {
    name: string;
    email: string;
}

interface IMailMessage {
    subject: string;
    body: string;
    attachment?: string[];
}  

interface IMessageDTO {
    to: IMailTo;
    message: IMailMessage;
}

class EmailService implements IMailService {
    sendMail({to, message} : IMessageDTO) {
        console.log(JSON.stringify(to));
        console.log(JSON.stringify(message));
    }
}

export default EmailService;
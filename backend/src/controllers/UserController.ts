import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [
    { name: "user 1", email: "user1@domain.com" }
];

export default {
    async index(req:Request, res:Response) {
        return res.json(users);
    },

    async create(req:Request, res:Response) {
        const emailService = new EmailService();
        emailService.sendMail({
            to: { 
                name: "tester", 
                email: "teste@domain.com" 
            },
            message: { 
                subject: "test subject", 
                body: "test body message" 
            }
        })

        return res.send();
    }
}; 

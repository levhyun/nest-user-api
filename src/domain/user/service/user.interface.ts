import { User } from "../domain/user.model";

export interface UserInterface {
    readAll(): Promise<User[]>
}
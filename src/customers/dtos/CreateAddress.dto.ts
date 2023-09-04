import { IsNotEmpty, IsNumberString } from "class-validator";

export class CreateAddressDto {
    @IsNotEmpty()
    line1: string;

    line2?: string;

    @IsNotEmpty()
    zip: number;

    @IsNotEmpty()
    city: string;

    @IsNotEmpty()
    state: string;
}
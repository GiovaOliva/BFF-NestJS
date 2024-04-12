import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


export type TeamDocument = HydratedDocument<Teams>

@Schema()
export class Teams {

    @Prop({required: true, unique: true})
    id: string

    @Prop({required: true})
    team: string

}

export const TeamSchema = SchemaFactory.createForClass(Teams);
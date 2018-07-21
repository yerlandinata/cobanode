import { Document, Model, model, Schema } from 'mongoose';

export interface INews extends Document {
    title: string;
    text: string;
}

const NewsSchema: Schema = new Schema({
    title: String,
    text: String,
});

export const News: Model<INews>  = model<INews>('News', NewsSchema);

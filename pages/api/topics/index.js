import connectMongoDB from '../../../libs/mongodb';
import Topic from '../../../models/topics';
import { NextResponse } from 'next/server';

// Middleware to parse the JSON body
export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(request, response) {
  if (request.method === 'POST') {
    const { todo, date } = request.body;
    await connectMongoDB();
    await Topic.create({ todo, date });
    return response.status(201).json({ message: "Todo created successfully" });
  } else {
    return response.status(405).json({ message: 'Method not allowed' });
  }
}

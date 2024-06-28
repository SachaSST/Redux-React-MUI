import { connect } from "http2";
import connectMongoDB from "../../../libs/mongodb";

export async function POST(request){
    const {todo} = await request.json();
    await connectMongoDB();

}
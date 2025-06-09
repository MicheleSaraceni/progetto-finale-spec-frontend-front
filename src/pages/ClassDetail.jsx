import { useParams } from "react-router-dom";
import DetailComponent from "../components/DetailComponent";

export default function ClassDetail() {
    const { id } = useParams();
    return <DetailComponent id={id} />;
}

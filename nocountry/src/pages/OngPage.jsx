import { OngItem } from "../components/OngItem";
import { OngInfo } from "../components/OngInfo";
import { OngBoton } from "../components/OngBoton";

export function OngPage() {
    return (
        <div>
            <div className="flex justify-around mt-16">
                <OngItem></OngItem>
                <OngInfo></OngInfo>
            </div>
            <OngBoton></OngBoton>
        </div>
    )
}

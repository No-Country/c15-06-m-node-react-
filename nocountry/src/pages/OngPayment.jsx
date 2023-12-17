import { OngPaymentItem } from "../components/OngPaymentItem"
import { OngPaymentHeader } from "../components/OngPaymentHeader"

const pay = { img: 'https://m.media-amazon.com/images/I/517YDRgq5jL._AC_UF894,1000_QL80_.jpg', name: 'African dogs' }

export function OngPayment() {
    return (
        <div>
            <div>
                <OngPaymentHeader></OngPaymentHeader>
            </div>
            <div className="flex gap-10 justify-center items-center">
                <OngPaymentItem pay={pay}></OngPaymentItem>
                <OngPaymentItem pay={pay}></OngPaymentItem>
                <OngPaymentItem pay={pay}></OngPaymentItem>
            </div>
        </div>
    )
}
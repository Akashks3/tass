import './Card.css';
const Card2 = ({ card = "/MONTH" }) => {

    return <div>
        <div className="Card" id="card">
            <div style={{ color: "gray" }}><center>PLUS</center></div>
            <h1><center>$9{card}</center></h1>
            <hr width="100%"></hr>
            <li> {Image} Single User</li>
            <li>50GB Storage </li>
            <li> Unlimited Public Projects </li>
            <li> Community Access </li>
            <li> Monthly Status Reports</li>
            <li>Dedicated Phone Support</li>
            <li>Free Subdomain</li>
            <li> Unlimited Public Projects </li>
            <center><button className="btn">BUTTON</button></center>
        </div>
    </div>
}

export default Card2
import Envelope from '../components/Envelope';

export default function Yay() {
    return (
        <div className="container">
            {/* Gif */}
            <img src="/assets/images/togepi-and-pikachu.gif" id="togepi-gif" alt="a cute picture of togepi" />
            {/* Question */}
            <h1 id="message">
                Thanks for being my Valentine! ⸜(｡˃ ᵕ ˂ )⸝♡
            </h1>

            <div>
                <Envelope />
            </div>
            <div className="cta-container" style={{ marginTop: '30px', paddingBottom: '20px' }}>
                <p className="cta-text">I choose you ❤️</p>
            </div>


        </div>
    );
}

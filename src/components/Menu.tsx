import buttonImg1 from "../assets/pexels-julieaagaard-2097090.jpg"
import buttonimg2 from "../assets/ahtziri-lagarde-LbgLMKRCyDg-unsplash.jpg"


export const Menu = () => {
    return (
        <>
            <div className="row m-0 p-5 justify-content-center">
                <div className="col-lg-3 d-flex justify-content-center">
                    <img src={buttonImg1} alt="" width="60" height="60" className="rounded-circle"/>
                </div>
                <div className="col-lg-3 d-flex justify-content-center">
                    <img src={buttonimg2} alt=""className="rounded-circle" width="60" />
                </div>
                <div className="col-lg-3 d-flex justify-content-center">
                    <button>button3</button>
                </div>
                <div className="col-lg-3 d-flex justify-content-center">
                    <button>button4</button>
                </div>
            </div>
        </>
    );
}
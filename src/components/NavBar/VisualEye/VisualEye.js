import spiral from '../../../assets/images/Spiral.svg'
import visualEye from '../../../assets/images/FilteredEyeAndMaskFour.svg'
import './VisualEye.scss'

function VisualEye() {
    return (
        <div className="visual-eye">
            <img src={spiral} alt="spiral" className="visual-eye__spiral" />
            <img src={visualEye} alt="visual-eye" className="visual-eye__eye" />
        </div>
    );
}

export default VisualEye;
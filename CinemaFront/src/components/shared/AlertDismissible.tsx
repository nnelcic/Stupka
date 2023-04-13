import Alert from "react-bootstrap/Alert";
import { CustomError } from "../../types/CustomError";

interface ButtonProps {
  func: (show: boolean) => void;
  error: CustomError;
}

const AlertDismissible: React.FC<ButtonProps> = ({func, error}) => {
    return (
        <Alert variant="danger" onClose={() => func(false)} dismissible>
            <Alert.Heading>{error.StatusCode}</Alert.Heading>
            <p>{error.Message}</p>
        </Alert>
    );
}

export default AlertDismissible;

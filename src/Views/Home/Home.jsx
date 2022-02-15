import Search from "antd/es/input/Search";
import HttpService from "../../Services/HttpService";
import {useState} from "react";
import {Form, notification} from "antd";
import Profile from "../../Components/Profile/Profile";
import Header from "../../Components/Header/Header";

export default function Home() {

    const [isLoading, setIsLoading] = useState(false);
    const [dataProfile, setDataProfile] = useState({});
    const [headerHeight, setHeaderHeight] = useState("50vh");
    const [logoHeight, setLogoHeight] = useState("30vh");
    const stopLoading = () => setInterval(() => setIsLoading(false), 1000);
    const showNotification = (msg, type = 'info') =>
    {
        switch (type) {
            case 'success':
                notification.success({
                    message: 'Notificación',
                    description:msg,
                    placement:'topRight',
                });
                break;
            case 'error':
                notification.error({
                    message: 'Notificación',
                    description:msg,
                    placement:'topRight',
                });
                break;
            default:
                notification.info({
                    message: 'Notificación',
                    description:msg,
                    placement:'topRight',
                });
                break;
        }
    }
    const getProfile = async (props) => {
        setIsLoading(true);
        await HttpService.Get(`users/${props}`)
            .then(res => {
                setDataProfile(res.data);
                setHeaderHeight("20vh");
                setLogoHeight("12vh");
                showNotification("Solicitud realizada con éxito", "success");
            })
            .catch((err) => showNotification("Solicitud no realizada", "error"))
            .finally(() => stopLoading());
    }
    const infoCard = () => <Profile data={{isLoading, dataProfile}}/>

    return (
        <div>
            <Header props={{headerHeight, logoHeight}}/>
            <div style={{width: "50%", margin: "auto"}}>
                <Form name="nest-messages" onFinish={getProfile}>
                    <Form.Item name={['profile', 'website']}
                               validateStatus="danger">
                        <Search size={"large"}
                                allowClear
                                onSearch={getProfile}
                                loading={isLoading}
                                placeholder="Ingrese aquí el perfil de GitHub que desea encontrar"/>
                    </Form.Item>
                </Form>
            </div>
            { infoCard() }
        </div>
    );
}
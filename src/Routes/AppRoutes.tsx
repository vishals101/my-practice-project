import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import React from 'react';
import * as navigate from "./RouteConstant";
import { LandingPage } from "../Container/LaindingPage/landingPage";
import * as Screens from "../Container"
interface IProps {

}

const RouteComponent: React.FC<IProps> = () => {
    return (
        <BrowserRouter>
            <Routes>
               <Route path={navigate.HOME} element={ <LandingPage/>} />
                {/* <Route element={<PublicRoute />}>
                    <Route path={navigate.HOME} element={<Screens.LandingPage />} />
                    <Route path={navigate.SETPASSWORD} element={<Screens.SetPassword />} />
                    <Route path={navigate.RESETPASSWORD} element={<Screens.ResetPassword />} />
                    <Route path={navigate.LOGIN} element={<Screens.Login />} />
                    <Route path={navigate.EMAILVERIFICATION} element={<Screens.EmailVerification />} />
                </Route>
                <Route element={<PrivateRoute />}>
                    <Route path={navigate.MAINMENU} element={<Screens.Mainmenu />} />
                    <Route path={navigate.RESERVATION} element={<Screens.ReservationStepper />} />
                    <Route path={navigate.MODIFYACCOUNT} element={<Screens.ModifyAccount />} />
                    <Route path={navigate.CHANGEPASSWORD} element={<Screens.ChangePassword />} />
                    <Route path={navigate.UPCOMINGRESERVATION} element={<Screens.UpcomingReservation />} />
                    <Route path={navigate.RESERVATIONDETAILS} element={<Screens.ReservationDetails />} />
                </Route> */}

            </Routes>
        </BrowserRouter>
    )
}

export default RouteComponent 
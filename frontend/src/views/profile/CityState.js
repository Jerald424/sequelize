import { HeadingText, SubHeading } from "components";
import { ProfileSupportStore } from "store/profile/ProfileStore";

export default function CityState() {
    const { state, city } = ProfileSupportStore.useState();

    return (
        <div className="df">
            <div className="f1">
                <HeadingText>City</HeadingText>
                <table className="table f1 " >
                    <thead>
                        <tr>
                            <th>Sno</th>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                        }
                    </tbody>
                </table>
            </div>
            <div className="f1">
                <HeadingText>State</HeadingText>
                <table className="table f1" >
                    <thead>
                        <tr>
                            <th>Sno</th>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}
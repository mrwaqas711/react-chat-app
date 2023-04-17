import { useState, useEffect } from "react";
import PhotosUploader from "../PhotosUploader";
import Perks from "../Perks";
import axios from "axios";
import AccountNav from "../AccountNav";
import { Navigate, useParams } from "react-router-dom";

export default function PlacesFormPage() {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
    const [perks, setPerks] = useState([]);
    const [extraInfo, setExtraInfo] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [maxGuests, setMaxGuests] = useState(1);
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [redirect, setRedirect] = useState(false);
    const [price, setPrice] = useState(100);

    useEffect(() => {
        if (!id) {
            return;
        }
        axios.get('/places/' + id).then(response => {
            const { data } = response;
            setTitle(data.title);
            setAddress(data.address);
            setAddedPhotos(data.photos);
            setDescription(data.description);
            setPerks(data.perks);
            setExtraInfo(data.extraInfo);
            setCheckIn(data.checkIn);
            setCheckOut(data.checkOut);
            setMaxGuests(data.maxGuests);
            setPrice(data.price);
        })
    }, [id])



    function inputHeader(text) {
        return (
            <h2 className="text-xl mt-4">{text}</h2>
        );
    };

    function inputDescription(text) {
        return (
            <p className="text-gray-500 text-sm">{text}</p>
        );
    }

    function preInput(header, description) {
        return (
            <div>
                {inputHeader(header)}
                {inputDescription(description)}
            </div>
        );
    }

    async function savePlace(e) {
        e.preventDefault();
        const placeData = {
            title, address, addedPhotos,
            description, perks,
            extraInfo, checkIn,
            checkOut, maxGuests, price
        }
        if (id) {
            await axios.put('/places', {
                id, ...placeData
            });
            setRedirect(true);
        } else {
            await axios.post('/places', placeData);
            setRedirect(true);
        }

    }

    if (redirect) {
        return <Navigate to={'/account/places'} />
    }

    return (
        <div>
            <AccountNav />
            <form onSubmit={savePlace}>
                {preInput('Title', 'Title for your place. should be short and catchy as in advertisement.')}
                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="title, for example: My lovely apartment" />
                {preInput('Address', 'Address to this place')}
                <input
                    type="text"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    placeholder="address" />
                {preInput('Photos', 'more = better')}
                <PhotosUploader
                    addedPhotos={addedPhotos}
                    onChange={setAddedPhotos}
                />
                <h2 className="text-2xl mt-4">Description</h2>
                <p className="text-gray-500 text-sm">
                    descritpion of the place
                </p>
                <textarea value={description} onChange={e => setDescription(e.target.value)} />
                <h2 className="text-2xl mt-4">Perks</h2>
                <p className="text-gray-500 text-sm">
                    select all the perks of your place
                </p>
                <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                    <Perks selected={perks} onChange={setPerks} />
                </div>
                <h2 className="text-2xl mt-4">Extra info</h2>
                <p className="text-gray-500 text-sm">
                    house rules, etc
                </p>
                <textarea value={extraInfo} onChange={e => setExtraInfo(e.target.value)} />
                <h2 className="text-2xl mt-4">Check in & out</h2>
                <p className="text-gray-500 text-sm">
                    add check in and out times, remember to have time window for cleaning the room between guests                        </p>
                <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-4">
                    <div>
                        <h3 className="mt-2 -mb-1">Check in time</h3>
                        <input type="text" placeholder="14"
                            value={checkIn}
                            onChange={e => setCheckIn(e.target.value)} />
                    </div>
                    <div>
                        <h3 className="mt-2 -mb-1">Check out time</h3>
                        <input type="text" placeholder="11"
                            value={checkOut}
                            onChange={e => setCheckOut(e.target.value)} />
                    </div>
                    <div>
                        <h3 className="mt-2 -mb-1">Max number of guests</h3>
                        <input type="number"
                            value={maxGuests}
                            onChange={e => setMaxGuests(e.target.value)} />
                    </div>
                    <div>
                        <h3 className="mt-2 -mb-1">Price per night</h3>
                        <input type="number"
                            value={price}
                            onChange={e => setPrice(e.target.value)} />
                    </div>
                </div>
                <button className="primary my-4">Save</button>
            </form>
        </div>
    );
}
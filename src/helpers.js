import axios from 'axios';

export async function handleIdCheck() {
    const name = document.getElementById('email-addy').value;
    return axios.post(`https://eng4509lwyqdq.x.pipedream.net`, name)
        .then((res) => {
            console.log(res);
            return true;
        }).catch(err => console.log(err));
}
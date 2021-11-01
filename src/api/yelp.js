import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer Gl4F2dxdTcoFK2oTNAKhA_bXvfLQJ_W63xh31rVC40UysRe9pyfCSFfEwew3rKIqi4ocdy5Xd2uk5kC23RUtJDgj_EFZlgbUnGcs3US2ZQRqMmZcMMfxPBgl4JhgYXYx'
    }
});
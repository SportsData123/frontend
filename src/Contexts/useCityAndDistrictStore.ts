import { create } from 'zustand';
import { City, District } from '../Types/CityAndDistrict';

interface useCityAndDistricctStore extends City, District {
  setCity: (cityId: number, cityCode: string, cityName: string) => void;
  setDistrict: (
    districtId: number,
    districtCode: string,
    districtName: string,
  ) => void;
}

const useCityAndDistricctStore = create<useCityAndDistricctStore>((set) => ({
  cityId: 1,
  cityCode: '11',
  cityName: '서울특별시',
  districtId: 1,
  districtCode: '110',
  districtName: '종로구',
  setCity: (cityId, cityCode, cityName) => set({ cityId, cityCode, cityName }),
  setDistrict: (districtId, districtCode, districtName) =>
    set({ districtId, districtCode, districtName }),
}));

export default useCityAndDistricctStore;
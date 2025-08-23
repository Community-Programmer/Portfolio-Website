// state/homeSlice.js
import { BACKEND_URL } from "@/config/config";
import type {
  GeneralDetail,
  Hero,
  PortfolioStats,
  Project,
  Skill,
  TechStack,
  Timeline,
} from "@/types/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHomeContent = createAsyncThunk(
  "home/fetchHomeContent",
  async () => {
    const res = await axios.get(
      `${BACKEND_URL}/api/v1/profile`
    );
    console.log(res.data);
    return res.data;
  }
);

interface HomeState {
  generalDetails: GeneralDetail | null;
  hero: Hero | null;
  skills: Skill[] | null;
  projects: Project[] | null;
  techStack: TechStack[] | null;
  portfolioStats: PortfolioStats | null;
  timeline: Timeline[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: HomeState = {
  generalDetails: null,
  hero: null,
  skills: null,
  projects: null,
  techStack: null,
  portfolioStats: null,
  timeline: null,
  loading: false,
  error: null,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeContent.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHomeContent.fulfilled, (state, action) => {
        Object.assign(state, action.payload);
        state.loading = false;
      })
      .addCase(fetchHomeContent.rejected, (state, action) => {
        state.error = action.error.message ?? "Error loading data";
        state.loading = false;
      });
  },
});

export default homeSlice.reducer;

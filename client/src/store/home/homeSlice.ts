// state/homeSlice.js
import type { Hero, PortfolioStats, Project, Skill, TechStack } from "@/types/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHomeContent = createAsyncThunk(
  "home/fetchHomeContent",
  async () => {
    const res = await axios.get("http://127.0.0.1:3000/api/v1/profile");
    console.log(res.data)
    return res.data;
  }
);

interface HomeState {
  hero: Hero | null;
  skills: Skill[] | null;
  projects: Project[] | null;
  techStack: TechStack[] | null;
  portfolioStats: PortfolioStats | null;
  loading: boolean;
  error: string | null;
}

const initialState: HomeState = {
  hero: null,
  skills: null,
  projects: null,
  techStack: null,
  portfolioStats: null,
  loading: false,
  error: null,
};


const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchHomeContent.pending, state => {
        state.loading = true;
      })
      .addCase(fetchHomeContent.fulfilled, (state, action) => {
        Object.assign(state, action.payload);
        state.loading = false;
      })
      .addCase(fetchHomeContent.rejected, (state, action) => {
        state.error = action.error.message ?? 'Error loading data';
        state.loading = false;
      });
  }
});

export default homeSlice.reducer;

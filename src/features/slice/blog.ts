import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface IBlog {
  posts: IBlogState[];
  status: string;
  error: string | null;
}

const BLOG_URL = "https://resume-builder-ng.herokuapp.com/blog";

const initialState: IBlog = {
  posts: [],
  status: "idle", // "idle", "loading", "success"
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await axios.get(BLOG_URL);
    return response.data;
  } catch (error) {
    if (error instanceof Error) return error.message;
  }
});

const slice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchPosts.fulfilled,
        (state, action: PayloadAction<IBlogState[]>) => {
          state.status = "success";
          const loadedPosts = action.payload;

          state.posts = [...state.posts, ...loadedPosts];
        }
      )
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Error fetching data";
      });
  },
});

export default slice.reducer;
export const selectPosts = (state: RootState) => state.blog.posts;
export const selectStatus = (state: RootState) => state.blog.status;
export const selectError = (state: RootState) => state.blog.error;

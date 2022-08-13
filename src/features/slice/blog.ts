import instance from "../../service/axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface IBlog {
  posts: IEditedBlogState[];
  status: string;
  error: string | null;
}

const initialState: IBlog = {
  posts: [],
  status: "idle", // "idle", "loading", "success"
  error: null,
};

// Thunks
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await instance.get("/blog");
    return response.data;
  } catch (error) {
    if (error instanceof Error) return error.message;
  }
});

export const addPost = createAsyncThunk(
  "posts/addPost",
  async (post: IPostToAdd) => {
    try {
      const response = await instance.post("/blog", post);
      return response.data;
    } catch (error) {
      if (error instanceof Error) return error.message;
    }
  }
);

const slice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    reactionAdded: (state, action: PayloadAction<IReactionPayload>) => {
      const {
        post: { _id },
        reaction,
      } = action.payload;
      const postExists = state.posts.find((post) => post._id === _id);

      if (postExists) {
        let { reactions } = postExists;
        // @ts-ignore
        reactions[reaction] += 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchPosts.fulfilled,
        (state, action: PayloadAction<IBlogState[]>) => {
          state.status = "success";
          const loadedPosts = action.payload.map((post) => ({
            ...post,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          }));

          state.posts = [...state.posts, ...loadedPosts];
        }
      )
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Error fetching data";
      })
      .addCase(
        addPost.fulfilled,
        (state, action: PayloadAction<IBlogState>) => {
          console.log(action.payload);

          const addedPost: IEditedBlogState = {
            ...action.payload,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          };

          state.posts = [...state.posts, addedPost];
        }
      )
      .addCase(addPost.rejected, (state, action) => {
        state.error = action.error.message ?? "Error fetching data";
      });
  },
});

export default slice.reducer;
export const { reactionAdded } = slice.actions;
export const selectPosts = (state: RootState) => state.blog.posts;
export const selectStatus = (state: RootState) => state.blog.status;
export const selectError = (state: RootState) => state.blog.error;

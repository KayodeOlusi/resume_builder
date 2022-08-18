import { v4 as uuidv4 } from "uuid";
import { faker } from "@faker-js/faker";
import instance from "../../service/axios";
import { RootState } from "../../app/store";
import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  createSelector,
} from "@reduxjs/toolkit";

interface IBlog {
  posts: IEditedBlogState[];
  stories: IStories[];
  status: string;
  error: string | null;
}

interface IStories {
  id: string | number;
  name: string;
  avatar: string;
  email: string;
  phoneNumber: string | number;
}

const initialState: IBlog = {
  posts: [],
  stories: [],
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

export const deleteBlogPost = createAsyncThunk(
  "posts/deletePost",
  async (id: string | number) => {
    try {
      const response = await instance.delete(`/blog/${id}`);
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
    loadStories: (state) => {
      const fakeData = [...Array(40)].map(() => {
        return {
          id: uuidv4(),
          name: faker.name.fullName(),
          avatar: faker.image.avatar(),
          email: faker.internet.email(),
          phoneNumber: faker.phone.number(),
        };
      });

      state.stories = [...fakeData];
    },
    deleteSinglePost: (state, action: PayloadAction<string>) => {
      const filteredPost = state.posts.filter(
        (post) => post._id !== action.payload
      );

      state.posts = [...filteredPost];
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
      })
      .addCase(
        deleteBlogPost.fulfilled,
        (state, action: PayloadAction<IBlogState>) => {
          const { _id } = action.payload;
          state.posts = state.posts.filter((post) => post._id !== _id);
        }
      )
      .addCase(deleteBlogPost.rejected, (state, action) => {
        state.error = action.error.message ?? "Error deleting data";
      });
  },
});

export default slice.reducer;
export const { reactionAdded, loadStories, deleteSinglePost } = slice.actions;
export const selectPosts = (state: RootState) => state.blog.posts;
export const selectStatus = (state: RootState) => state.blog.status;
export const selectError = (state: RootState) => state.blog.error;
export const selectStories = (state: RootState) => state.blog.stories;

export const selectSinglePost = (state: RootState, id: string) => {
  const validId = id.replace(/[^a-zA-Z0-9]/g, "");
  return state.blog.posts.find((post) => post._id === validId);
};

export const selectPostsByUser = createSelector(
  [
    selectPosts,
    (state: RootState, name: string) => name.replace(/[^a-zA-Z0-9]/g, " "),
  ],
  (posts, name) => posts.filter((post) => post.author !== name)
);

export const selectAllTags = createSelector([selectPosts], (posts) => {
  const allTags = posts.map((post) => post.tags);
  const editedArray = allTags.flat().filter(Boolean).slice(0, 7);
  // @ts-ignore
  return [...new Set(editedArray)];
});

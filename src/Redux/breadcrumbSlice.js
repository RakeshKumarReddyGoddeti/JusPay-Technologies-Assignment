import { createSlice } from '@reduxjs/toolkit';

const breadcrumbSlice = createSlice({
    name: 'breadcrumb',
    initialState: {
        superParent: '',
        parent: '',
        child: '',
    },
    reducers: {
        setBreadcrumb (state, action) {
            state.superParent = action.payload.superParentBreadcrumb;
            state.parent = action.payload.parentBreadcrumb;
            state.child = action.payload.childBreadcrumb;
        }
    },
});

export const { setBreadcrumb } = breadcrumbSlice.actions;
export default breadcrumbSlice.reducer;
import layout from "./layout";
import todo from "../pages/app/todo/store";
import email from "../pages/app/email/store";
import chat from "../pages/app/chat/store";
import project from "../pages/app/projects/store";
import kanban from "../pages/app/kanban/store";
import calendar from "../pages/app/calender/store";
import auth from "../pages/auth/common/store";
import authSlice from "../slice/authSlice";
import teacherSlice from "../slice/admin/teacherSlice";
import classSlice from "../slice/admin/classSlice";
import programSlice from "../slice/admin/programSlice";
import termSlice from "../slice/admin/termSlice";
import subjectSlice from "../slice/admin/subjectSlice";

const rootReducer = {
  layout,
  todo,
  email,
  chat,
  project,
  kanban,
  calendar,
  auth,
  authSlice,
  teacherSlice,
  classSlice,
  programSlice,
  termSlice,
  subjectSlice
};
export default rootReducer;

import test from "ava";
import { hello } from "./index";

test("A test", t => {
    t.is(hello(), "hello");
});

"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Forms from "./components/Forms/Forms";
import Cards from "./components/Cards/Cards"

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

Builder.registerComponent(Counter, {
  name: "Counter",
});
Builder.registerComponent(Forms, {
  name: "Forms",
});
Builder.registerComponent(Cards, {
  name: "Cards",
});

# React Router Dom v6 Nested Route with Params Issue

This repository demonstrates a common issue encountered when using nested routes with parameters in React Router Dom v6. The problem arises when a nested route's path includes a parameter that conflicts or overlaps with a parent route's path.

## Problem Description:
The route '/users/:userId' fails to render correctly.  The issue is the incorrect path matching and potential overlap in routes causing unexpected behavior, resulting in a warning in the console and the nested route not rendering properly. 
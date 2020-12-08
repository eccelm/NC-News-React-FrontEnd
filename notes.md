# monday morning

- can hard code topics and their desc's or get them from topics API?

Completed:

- Have all the basic elements on home page, need to swap out the buttons for links

# Tuesday Notes

- what parametric endpoint for single game in lecture example?

Reach router passes the path endpoint on props?
thats what need to ask about along with

Using params (in filter? )
params : limit:100 etc etc

Error handling

See screenshot

console.dir because .log flattens so can't open up

data.msg : 'Error message here'

state hasError: false

comDidMount func inside needs a catch block
destructure the error message (use dir to see it)

flip the boolaen aand add error message into state

Can see the other part renders before the conditional logic completes

all things must be returned e.g. if 3 conditional logics must have a return each

see final screenshot - order goes check if loading check if error message then finally else {rest of UI} also note made unseen changes between Loading comp and adding into state

Final step extract out the error comp
DONT call it Error as keyword

Other parts:

- bad path e.g. /notapath
- stick it an App, can also have a default path

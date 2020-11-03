const SPLIT_CHAR='$$'

export default
`
In kotlin we can declare properties using var and val.
When we declate a property with var, our property is mutable
and can be changed later in our code.When we declate a property
with val, the property is immutable and can not be changed later.
Lets see and example:
${SPLIT_CHAR}
var fruit=''
val car=''

fruit='banana' //works
car='red car' // won't work
${SPLIT_CHAR}
<b>Nullable types</b>
In order to declare a nullable property we need to add "?" to 
the property type:
${SPLIT_CHAR}
var car:Car=null // won't work
var car:Car?=null //works, we added "?"
${SPLIT_CHAR}
<b>lateinit modifier</b>
If we choose to initialize our property later in our code, we need to add the "lateinit" modifier. 
Note that you'll have to initialize your property later,if you won't, a null pointer exception
will be thrown.
To use the lateinit modifier you need to specify the property type.
${SPLIT_CHAR}
lateinit var car // won't work
lateinit var car:Car //works
${SPLIT_CHAR}
You can't use lateinit modifier with properties of nullable, primitive and immutable types.
${SPLIT_CHAR}
lateinit var car:Car?// won't work, nullable
lateinit val car:Car //won't work, immutable type
lateinit var someNumber:Int //won't work, primitive type
var car:Car?=null //works
${SPLIT_CHAR}


`
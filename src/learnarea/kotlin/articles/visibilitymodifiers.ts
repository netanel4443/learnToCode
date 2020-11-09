import splashScreen from "../../../android/examples/splashScreen"

const SPLIT_CHAR='$$'

export default
`
In kotlin we have 4 visibility modifiers: private,public,protected and internal
${SPLIT_CHAR}
class TestClass{
  private val privateModifier=1
  protected val protectedModifier=2
  internal val internalModifier=3
  public val publicModifier=4
}
${SPLIT_CHAR}
public- is the default visibility if we don't use another modifier.
Any class that has an instance of TestClass can access <b>public</b> properties
and functions from TestClass for example :
${SPLIT_CHAR}  
class  AnotherClass{
  private val testClass=TestClass()
  init {
      //can access  publicModifier
      println(testClass.publicModifier)
  }
}
${SPLIT_CHAR}  
protected-unlike public,a propertry with protected modifier can not be
access outside its class or a subclass (a class that inherits from a superclass)
for example:
${SPLIT_CHAR}  
class TestClass{
  protected val protectedModifier=2
}

class AnotherClass{
  val testClass=TestClass()

  init{
    println(testClass.protectedModifier)
    // won't work we can't access it

  }
}
${SPLIT_CHAR}  
In order to access protectedModifier from another class we need
to do it that way:
${SPLIT_CHAR}
open class TestClass{
  //Note that we added "open" before the class word so we can inherit from it
  //classes are final by default so we need to add "open".

  protected val protectedModifier=2
}

class  AnotherClass:TestClass(){

  init {
      //if we inherit, we don't need to declare an instance of TestClass
      //we can access its properties like the example below
      println(publicModifier)
      println(protectedModifier)
  }
}
${SPLIT_CHAR}
private-we can guess what it means by its name.
If a class has a property or a function with a private modifier
it can be accessed only inside its class (can be access inside inernal classes either)
it can not be accessed in another classes even if this class inherits from it.
${SPLIT_CHAR}
open class TestClass{
  private val privateModifier=1
}

//inheritance example 
class  AnotherClass:TestClass(){

  init {
      println(privateModifier)// won't work
  }
}
//TestClass instance example
class  AnotherClass(){
  val testClass=TestClass()
  init {
      println(testClass.privateModifier)// won't work
  }
}
${SPLIT_CHAR}
internal-this means that the member will be visibile in the same module.






`
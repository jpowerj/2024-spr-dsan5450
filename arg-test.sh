commitmsg=""

echo "hello$1"

if [ $# -ge 0 ]
  then
    commitmsg="Arg supplied"
fi

echo "hi$commitmsg"
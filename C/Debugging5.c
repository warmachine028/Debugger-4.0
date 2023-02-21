   #include<stdio.h>
   #include<stdlib.h>
   struct st{
       int a;
       //char b;
   };
 
   int main()
   {
       struct st *st_ptr;
       st_ptr = malloc(sizeof(struct st));
       printf("%ld\n",sizeof(struct st));
       printf("%ld\n",sizeof st_ptr);
       return 1;
   }

import os
from Crypto.Chiper import AES
from Crypto.Util.Padding Import pad
from Crypto.Random import get_random_bytes


#STep2: Deriving the encryption key from simple password
Password = "hello"
salt = get_random_bytes(16)
key = password.encode().


class Api::SessionsController < ApplicationControllerdef new
    def new    
        render :new
    end

    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
            )
            
            if @user
                login(@user)
                render 'api/users/show'
            else
                debugger
            render json:  ['Invalid username / password'], status: 401
        end
    end

    def destroy
        @user = current_user

        if @user
            logout
            render :new
        else 
            render json: ['Not signed in'], status: 404
        end
    end
end
